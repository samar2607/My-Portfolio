<?php
if (isset($_POST) && isset($_POST['name']) && isset($_POST['prenom']) && isset($_POST['email']) && isset($_POST['tel']) && isset($_POST['qui']) && isset($_POST['subject']) && isset($_POST['range']) && isset($_POST['msg'])) {
    if (!empty($_POST['name']) && !empty($_POST['prenom']) && !empty($_POST['email']) && !empty($_POST['tel']) && !empty($_POST['qui']) && !empty($_POST['subject']) && !empty($_POST['range']) && !empty($_POST['msg'])) {
?>
<?php
        $name = $_POST['name'];
        echo $name;
        $prenom = $_POST['prenom'];
        echo $prenom;
        $email = $_POST['email'];
        echo $email;
        $tel = $_POST['tel'];
        echo $tel;
        $qui = $_POST['qui'];
        echo $qui;
        $subject = $_POST['subject'];
        echo $subject;
        $msg = $_POST['msg'];
        echo $msg;
    }
}
?>