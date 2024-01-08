<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blogbisku</title>
    <link rel="stylesheet" href="style/bukutamu.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <header class="header">
        <img src="https://st2.depositphotos.com/1041273/43175/v/450/depositphotos_431759732-stock-illustration-sightseeing-bus-emblem-on-white.jpg"
            alt="logobis" class="logo">
        <a href="index.html" class="blogku">Blogbisku</a>
        <nav class="navbar">
            <a href="index.html">Home</a>
            <a href="About.html">About</a>
            <a href="Blog.html">Blog</a>
            <a href="">Buku Tamu</a>
        </nav>
    </header>
    <div>
        <img src="assets/foto/LogoBMCNew.png" alt="bmc" class="logobmc">
        <hr>
    </div>

    <!-- Start From -->
    <div class="judul">
        <div class="subjudul">
            <h1>Buku Tamu</h1>
            <p>Silakan Mengisi Buku Tamu</p>
        </div>
        <form action="post.php" method="post">
            <div class="form-group">
                <label>Nama</label>
                <input type="text" name="nama" id="nama" class="form-control" placehorder="Nama" required>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="text" name="email" id="email" class="form-control" placehorder="Email" required>
            </div>
            <div class="form-group">
                <label>Alamat</label>
                <input type="text" name="alamat" id="alamat" class="form-control" placehorder="Alamat" required>
            </div>
            <div class="form-group">
                <label>Kota/Kabupaten</label>
                <input type="text" name="kota" id="kota" class="form-control" placehorder="Kota/Kabupaten" required>
            </div>
            <div class="form-group">
                <label>Keperluan</label>
                <textarea name="keperluan" id="keperluan" class="form-control" rows="4" placehorder="Jelaskan keperluan anda!" required></textarea>
            </div>
            <input type="submit" name="submit" value="kirim" class="btn btn-primary"> <br><br><br><br>
            <label>Daftar Tamu</label>
            <div class="form-group">
                <?php
                 
                    if(file_exists("db.html") && filesize("db.html") > 0){
                        $handle = fopen("db.html" , "r");
                        $contents = fread($handle, filesize("db.html"));
                        fclose($handle);

                        echo "$contents";
                    }
                    else {
                        echo "<div class='alarm'> Tidak Ada Data Tamu <br/></div>";
                    }
                ?>
            </div>
        </form>
    </div>
    <!-- End Profil -->
    <!-- Footer -->
    <footer>
        <div class="footertop">
            <div class="sosialicons">
                <a href="https://www.facebook.com/bismania"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/bismaniacommunity/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/BMCJateng"><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
            </div>
            <div class="footernav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="About.html">About</a></li>
                    <li><a href="Blog.html">Blog</a></li>
                    <li><a href="buku-tamu.php">Buku Tamu</a></li>
                </ul>
            </div>
        </div>
        <div class="footerbottom">
            <p>Copyright &copy;2024 Designed by <span class="designer">Muhamad Husnaya</span></p>
        </div>
    </footer>
</body>
</html>