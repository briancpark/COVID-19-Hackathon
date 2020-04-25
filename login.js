var btn = document.getElementById("loginBtn").addEventListener('click', function(){
                    var usernameBox = document.getElementById("usernameTextBox");
                    var passwordBox = document.getElementById("passwordTextBox");
                    if(usernameBox.value.length == 0 || passwordBox.value.length == 0){
                        document.getElementById("loginBtn").disabled = true;
                            document.getElementById("loginBtn").innerHTML = "Loading ";
                            var btnLoading = document.createElement("span");
                            btnLoading.className = "spinner-border spinner-border-sm";
                            btnLoading.setAttribute("role","status");
                            document.getElementById("loginBtn").appendChild(btnLoading);
                            setTimeout(function(){
                                btnLoading.remove();
                                document.getElementById("loginBtn").disabled = false;
                                document.getElementById("loginBtn").innerHTML = "Log in "; 
                                var errorAlert = document.createElement("div");
                                errorAlert.className = "alert alert-danger";
                                errorAlert.setAttribute("role","alert");
                                errorAlert.innerHTML = "no empty fields. thx";
                                errorAlert.style = "position: absolute;top: 60%;left: 50%;transform: translate(-50%,-50%); width: 200px; height: 50px;";
                                window.document.body.append(errorAlert);

                                setTimeout(function(){
                                    errorAlert.remove();
                                },3000);
                            }, 1000);
                    }else{

                        fetch("/api/login", {
                            method:'POST',
                            body: JSON.stringify({email:usernameBox.value,password:passwordBox.value}),
                            headers:{"Content-Type": "application/json"}
                            }).then(response => {
                                //
                                if(response.status == 200){
                                    document.getElementById("loginBtn").disabled = true;
                                    document.getElementById("loginBtn").innerHTML = "Loading ";
                                    var btnLoading = document.createElement("span");
                                    btnLoading.className = "spinner-border spinner-border-sm";
                                    btnLoading.setAttribute("role","status");
                                    document.getElementById("loginBtn").appendChild(btnLoading);
                                    setTimeout(function(){
                                    btnLoading.remove();
                                    document.getElementById("loginBtn").disabled = false;
                                    document.getElementById("loginBtn").innerHTML = "Log in "; 
                                    window.document.location.replace("/vendor/panel");
                                    }, 3000);
                                }else if(response.status == 404){
                                    document.getElementById("loginBtn").disabled = true;
                                    document.getElementById("loginBtn").innerHTML = "Loading ";
                                    var btnLoading = document.createElement("span");
                                    btnLoading.className = "spinner-border spinner-border-sm";
                                    btnLoading.setAttribute("role","status");
                                    document.getElementById("loginBtn").appendChild(btnLoading);
                                    setTimeout(function(){
                                    btnLoading.remove();
                                    document.getElementById("loginBtn").disabled = false;
                                    document.getElementById("loginBtn").innerHTML = "Log in "; 
                                    var errorAlert = document.createElement("div");
                                    errorAlert.className = "alert alert-danger";
                                    errorAlert.setAttribute("role","alert");
                                    errorAlert.innerHTML = "email doesn't exist";
                                    errorAlert.style = "position: absolute;top: 60%;left: 50%;transform: translate(-50%,-50%); width: 200px; height: 50px;";
                                    window.document.body.append(errorAlert);

                                    setTimeout(function(){
                                        errorAlert.remove();
                                    },3000);
                                    }, 3000);
                                }else if(response.status == 400){
                                    document.getElementById("loginBtn").disabled = true;
                                    document.getElementById("loginBtn").innerHTML = "Loading ";
                                    var btnLoading = document.createElement("span");
                                    btnLoading.className = "spinner-border spinner-border-sm";
                                    btnLoading.setAttribute("role","status");
                                    document.getElementById("loginBtn").appendChild(btnLoading);
                                    setTimeout(function(){
                                    btnLoading.remove();
                                    document.getElementById("loginBtn").disabled = false;
                                    document.getElementById("loginBtn").innerHTML = "Log in "; 
                                    var errorAlert = document.createElement("div");
                                    errorAlert.className = "alert alert-danger";
                                    errorAlert.setAttribute("role","alert");
                                    errorAlert.innerHTML = "wrong credentials";
                                    errorAlert.style = "position: absolute;top: 60%;left: 50%;transform: translate(-50%,-50%); width: 200px; height: 50px;";
                                    window.document.body.append(errorAlert);

                                    setTimeout(function(){
                                        errorAlert.remove();
                                    },3000);
                                    }, 3000);
                                }

                                })
