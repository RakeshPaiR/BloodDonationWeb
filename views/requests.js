<!DOCTYPE doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
        <link href="https://fonts.googleapis.com/css?family=KoHo:400,700" rel="stylesheet">
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
                <!-- Bootstrap CSS -->
        <link crossorigin="anonymous" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" rel="stylesheet">
			       	<style type="text/css">
			       		body {
			       			
			       		}
			       		.bg-light {
			       			background-color: #dadfe1;
			       		}
						.top-margin {
							margin-top: 5rem;
						}
						.footer {
							position: absolute;
							right: 0;
							bottom: 0;
							left: 0;
							padding: 1rem;
							background-color: #2c3e50;
							width: 100%;
							color: #ecf0f1;
							text-align: center;
						}
						.brandname {
							
							font-weight: 700;
							font-size: 2rem;
							font-family: 'KoHo', sans-serif;
						}
						.webname {
							margin-top: 1%;
							margin-left: 10%;
							font-size: 3rem;
							position: relative;
							top: 10%;
							font-weight: 700;
							font-family: 'KoHo', sans-serif;
						}
						
						.buttons {
							margin-top: 3rem;
							margin-left: auto;
							margin-right: auto;
						}
						.container {
							margin-top: 8rem;
						}
							
						
                    </style>
                    <title>
                        ELIXIR
                    </title>
						
						
                </link>
            </meta>
        </meta>
    </head>
    <body>
        <!-- Navbar code-->
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a class="navbar-brand brandname" href="/">
               	ELIXIR
            </a>
            <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
                <span class="navbar-toggler-icon">
                </span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                
                <a href="/emergency" class="ml-auto"><button class="btn btn-outline-danger mr-sm-2 ml-auto" type="button">
                    EMERGENCY REQUESTS
                </button></a>
                <a href="/logout"><button class="btn btn-primary mr-sm-2" type="button">
	            		LOGOUT
				</button></a>
                    
            </div>
        </nav>
		<!-- Navbar code Ends -->
							<table>
<% for(var i=0; i < data.length; i++) { %>
   <tr>
     <td><%= data[i].id %></td>
     <td><%= data[i].city %></td>
     <td><%= data[i].bg %></td>
   </tr>
<% } %>
</table>
			
        <!--Footer-->
        <footer class="footer">
        	<span style="font-family: 'KoHo', sans-serif;">ELIXIR</span>
		</footer>
        <!--Footer Ends-->
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script crossorigin="anonymous" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" src="https://code.jquery.com/jquery-3.3.1.slim.min.js">
        </script>
        <script crossorigin="anonymous" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js">
        </script>
        <script crossorigin="anonymous" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js">
        </script>
    </body>
</html>