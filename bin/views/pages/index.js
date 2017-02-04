<!-- views/pages/index.ejs -->

<!DOCTYPE html>
<html lang="en">
<head>
    <% include ../partials/head %>
</head>
<body class="container">

    <header>
        <% include ../partials/header %>
    </header>

    <main>
        <div class="jumbotron">
            <h1>This is great</h1>
            <p>Welcome to templating using EJS</p>

            <% status %>
            <% temp %>
        </div>
    </main>

    <footer>
        <% include ../partials/footer %>
    </footer>
    
</body>
</html>