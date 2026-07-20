const API_URL =
"https://script.google.com/macros/s/AKfycbwXG94LnH_8srGevCU8A42thnM_oRN8QCMwi_e7RZXI9Lt9ZmchPI64t3RzLDdoUIqS/exec";

const loginBox = document.querySelector(".login-box");
const adminPanel = document.getElementById("adminPanel");
const loginBtn = document.getElementById("loginBtn");
const saveBtn = document.getElementById("saveBtn");

let currentAuthorId = "SYAK";

/* BUKA PANEL EDITOR */
loginBtn.addEventListener("click", function () {
    loginBox.style.display = "none";
    adminPanel.style.display = "block";

    loadAuthor();
});

/* AMBIL DATA DARIPADA GOOGLE SHEETS */
async function loadAuthor() {
    try {
        saveBtn.disabled = true;
        saveBtn.textContent = "Loading...";

        const response = await fetch(
            API_URL + "?time=" + Date.now()
        );

        if (!response.ok) {
            throw new Error("Data tidak dapat dibaca.");
        }

        const authors = await response.json();

        const author = authors.find(function (item) {
            return String(item.id || "")
                .trim()
                .toUpperCase() === currentAuthorId;
        });

        if (!author) {
            alert("Maklumat penulis tidak dijumpai.");
            return;
        }

        document.getElementById("nama").value =
            author.NAMA || "";

        document.getElementById("peranan").value =
            author.PERANAN || "";

        document.getElementById("biodata").value =
            author.BIODATA || "";

        document.getElementById("pendidikan").value =
            author.PENDIDIKAN || "";

        document.getElementById("kerjaya").value =
            author.KERJAYA || "";

        document.getElementById("karya").value =
            author.KARYA || "";

        document.getElementById("pencapaian").value =
            author.PENCAPAIAN || author.PENAPAIAN || "";

    } catch (error) {
        console.error(error);
        alert("Gagal mengambil data Google Sheets.");

    } finally {
        saveBtn.disabled = false;
        saveBtn.textContent = "SAVE";
    }
}

/* SIMPAN DATA */
saveBtn.addEventListener("click", async function () {
    const payload = {
        id: currentAuthorId,

        NAMA:
            document.getElementById("nama").value.trim(),

        PERANAN:
            document.getElementById("peranan").value.trim(),

        BIODATA:
            document.getElementById("biodata").value.trim(),

        PENDIDIKAN:
            document.getElementById("pendidikan").value.trim(),

        KERJAYA:
            document.getElementById("kerjaya").value.trim(),

        KARYA:
            document.getElementById("karya").value.trim(),

        PENCAPAIAN:
            document.getElementById("pencapaian").value.trim()
    };

    try {
        saveBtn.disabled = true;
        saveBtn.textContent = "Saving...";

        const response = await fetch(API_URL, {
            method: "POST",

            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },

            body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (!result.success) {
            throw new Error(
                result.message || "Data gagal disimpan."
            );
        }

        alert("Maklumat berjaya disimpan!");

    } catch (error) {
        console.error(error);
        alert("Maklumat gagal disimpan.");

    } finally {
        saveBtn.disabled = false;
        saveBtn.textContent = "SAVE";
    }
});
