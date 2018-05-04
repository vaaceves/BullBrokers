function caculadora() {
                            var plazo = document.getElementById("plazo").value;
                            document.getElementById("simEsperada").innerHTML += ('<div>'+ plazo +'</div>');
                            var cInicial = document.getElementById("cInicial").value;
                            for (var t = 0; t <= plazo; t++)
                            {
                                var meses = [1];
                                var mes = 1;
                                mes++;
                                meses.push(mes);
                        
                            }
                            function imprimir(){
                                for(var i = 0; i<=meses; i++)
                                {
                                  document.getElementById("simEsperada").innerHTML += ('<div>'+meses[i]+'</div>');  
                                }
                                  
                            }
}
