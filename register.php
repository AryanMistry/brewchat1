<?php 
include('server.php'); 
?>
<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
    <style>
        /* Include the content from the style.css here */
        <?php include('style.css'); ?>
    </style>
</head>
<body>
<div class="header">
    <h2>Register</h2>
</div>
<form method="post" action="register.php">
    <?php include('errors.php'); ?>
    <div class="input-group">
        <label>Username</label>
        <input type="text" name="username" value="<?php echo $username; ?>" required>
    </div>
    <div class="input-group">
        <label>Email</label>
        <input type="email" name="email" value="<?php echo $email; ?>" required>
    </div>
    <div class="input-group">
        <label>Password</label>
        <input type="password" name="password_1" required>
    </div>
    <div class="input-group">
        <label>Confirm password</label>
        <input type="password" name="password_2" required>
    </div>
    <div class="input-group">
        <button type="submit" class="btn" name="reg_user">Register</button>
    </div>
    <p>
        Already a member? <a href="login.php">Sign in</a>
    </p>
</form>
</body>
</html>
