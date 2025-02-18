// Main JS logic to reveal text after flower animation
onload = () => {
        document.body.classList.remove("container");
        
        // Menunggu bunga mekar selesai (bunga mekar sekitar 4 detik)
        setTimeout(() => {
            document.querySelector('.pantun').style.display = 'block'; // Menampilkan teks setelah bunga mekar
        }, 4000);  // Tunggu bunga mekar selama 4 detik
    };
    