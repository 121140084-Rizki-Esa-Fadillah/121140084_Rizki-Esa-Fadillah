function Input(event) {
    event.preventDefault();

    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var program_studi= document.getElementById("program_studi").value;
    var email = document.getElementById("email").value;
    var jenis_kelamin = document.getElementById("jenis_kelamin").value;
    var tanggal_lahir = document.getElementById("tanggal_lahir").value;
    var nomor = document.getElementById("nomor").value;
    var nama_game= document.getElementById("nama_game").value;;
    var id_game = document.getElementById("id_game").value;

     //encode data kedalam URL
    var params = new URLSearchParams();
    params.append("nama", nama);
    params.append("nim", nim);
    params.append("program_studi", program_studi);
    params.append("email", email);
    params.append("jenis_kelamin", jenis_kelamin);
    params.append("tanggal_lahir", tanggal_lahir);
    params.append("nomor", nomor);
    params.append("nama_game", nama_game);
    params.append("id_game", id_game);

    window.location.href = "Halaman_Tabel.html?" + params.toString();
}

function Output(event) {
    event.preventDefault();

    var urlParams = new URLSearchParams(window.location.search);
    var encodednama = urlParams.get("nama");
    var encodednim = urlParams.get("nim");
    var encodedprogram_studi = urlParams.get("program_studi");
    var encodedemail = urlParams.get("email");
    var encodedjenis_kelamin = urlParams.get("jenis_kelamin");
    var encodedtanggal_lahir = urlParams.get("tanggal_lahir");
    var encodednomor = urlParams.get("nomor");
    var encodednama_game = urlParams.get("nama_game");
    var encodedid_game = urlParams.get("id_game");

    var nama = decodeURIComponent(encodednama);
    var nim = decodeURIComponent(encodednim);
    var program_studi = decodeURIComponent(encodedprogram_studi);
    var email = decodeURIComponent(encodedemail);
    var jenis_kelamin = decodeURIComponent(encodedjenis_kelamin);
    var tanggal_lahir = decodeURIComponent(encodedtanggal_lahir);
    var nomor = decodeURIComponent(encodednomor);
    var nama_game = decodeURIComponent(encodednama_game);
    var id_game = decodeURIComponent(encodedid_game);

    document.getElementById("nama").textContent = nama;
    document.getElementById("nim").textContent = nim;
    document.getElementById("program_studi").textContent = program_studi;
    document.getElementById("email").textContent = email;
    document.getElementById("jenis_kelamin").textContent = jenis_kelamin;
    document.getElementById("tanggal_lahir").textContent = tanggal_lahir;
    document.getElementById("nomor").textContent = nomor;
    document.getElementById("nama_game").textContent = nama_game;
    document.getElementById("id_game").textContent = id_game;
}
Output()
