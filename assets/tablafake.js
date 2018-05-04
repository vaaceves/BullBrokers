var table = '';
                        var plazo = document.getElementById("plazo").value;
                        for (var r = 0; r<rows; r++){
                            table += '<tr>';
                                table += '<td>' + '</td>';
                                table += '<td>' + '1' + '</td>';
                                table += '<td>' + '500.00' + '</td>';
                                table += '<td>' + '500.00' + '</td>';
                                table += '<td>' + '500.00' + '</td>';
                                table += '<td>' + '10.83' + '</td>';
                                table += '<td>' + '510.83' + '</td>';
                                table += '<td>' + '10.83' + '</td>';
                            table += '</tr>';
                        }
                        for (var r = 0; r<rows; r++){
                            table += '<tr>';
                                table += '<td>' + '</td>';
                                table += '<td>' + '2' + '</td>';
                                table += '<td>' + '500.00' + '</td>';
                                table += '<td>' + '1000.00' + '</td>';
                                table += '<td>' + '1010.83' + '</td>';
                                table += '<td>' + '21.90' + '</td>';
                                table += '<td>' + '1032.73' + '</td>';
                                table += '<td>' + '32.73' + '</td>';
                            table += '</tr>';
                        }
                        for (var r = 0; r<rows; r++){
                            table += '<tr>';
                                table += '<td>' + '</td>';
                                table += '<td>' + '3' + '</td>';
                                table += '<td>' + '500.00' + '</td>';
                                table += '<td>' + '1500.00' + '</td>';
                                table += '<td>' + '1532.73' + '</td>';
                                table += '<td>' + '33.21' + '</td>';
                                table += '<td>' + '1565.94' + '</td>';
                                table += '<td>' + '65.94' + '</td>';
                            table += '</tr>';
                        }
                        document.write('<table class="table table-striped table-hover">'
                                       + 
                                       '<thead class="warning"><tr><th></th><th>Mes #</th><th>Capital</th><th>Acumulado</th><th>Capital Acumulado</th><th>Rendimiento Obtenido</th><th>Capital Obtenido</th><th>Diferencia</th></tr></thead>'
                                       +
                                       table
                                       + 
                                       '</table>');