// Objek untuk menyimpan semua pengaturan profil
const profileSettings = {
  favicon: "media/vynaa.jpg", // Path ke favicon
  title: "BESTSTORE | LINK", // Judul halaman
  metaTitle: "BESTSTORE | LINK", // Meta title untuk SEO
  metaDescription: "Profile Website Vynaa Valerie, Creator and Dev", // Deskripsi meta untuk SEO
  metaKeywords: "Vynaa, Vynaa Valerie, profile Vynaa, siapa Vynaa?", // Keywords meta untuk SEO
  metaRobots: "index, follow", // Pengaturan robot meta untuk SEO
  imageSrc: "media/vynaa.jpg", // Path ke gambar profil
  name: "ʙᴇꜱᴛ ꜱᴛᴏʀᴇ ɪᴅ", // Nama profil
  occupation: "𝐉𝐁 𝐓𝐑𝐔𝐒𝐓𝐄𝐃 𝐃𝐀𝐍 𝐌𝐔𝐑𝐀𝐇", // Pekerjaan atau jabatan
  links: [
    { title: "( 𝐉𝐁 | 𝐀𝐋𝐋𝐆𝐀𝐌𝐄 )", url: "https://wa.me/6282389924037?text=hai", icon: "fa-whatsapp" }, // Tautan WhatsApp
    { title: "( 𝐉𝐎𝐊𝐈 𝐁𝐋𝐎𝐗 𝐅𝐑𝐔𝐈𝐓 )", url: "https://wa.me/6282389924037?text=hai", icon: "fa-whatsapp" }, // Tautan WhatsApp
  ]
};

// Mengatur favicon
document.getElementById('favicon').href = profileSettings.favicon;

// Mengatur judul halaman
document.getElementById('title').textContent = profileSettings.title;

// Mengatur meta tags
document.getElementById('meta-title').content = profileSettings.metaTitle;
document.getElementById('meta-description').content = profileSettings.metaDescription;
document.getElementById('meta-keywords').content = profileSettings.metaKeywords;
document.getElementById('meta-robots').content = profileSettings.metaRobots;

// Mengatur gambar profil
document.getElementById('profile-image').src = profileSettings.imageSrc;

// Mengatur nama profil
document.getElementById('profile-name').textContent = profileSettings.name;

// Mengatur teks pekerjaan atau jabatan
document.getElementById('occupation-text').textContent = profileSettings.occupation;

// Mengatur tautan-tautan
const linkBoxes = document.getElementById('link-boxes');
profileSettings.links.forEach(link => {
  // Hanya menambahkan tautan yang tidak kosong
  if (link.title && link.url) {
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.innerHTML = `<i class="fa ${link.icon}" aria-hidden="true"></i> ${link.title}`;
    linkBoxes.appendChild(linkElement);
  }
});
 
