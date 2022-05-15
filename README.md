<div align="center">
<table>
    <theader>
        <tr>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/epis.png?raw=true" alt="EPIS" style="width:50%; height:auto"/></td>
            <th>
                <span style="font-weight:bold;">UNIVERSIDAD NACIONAL DE SAN AGUSTIN</span><br />
                <span style="font-weight:bold;">FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS</span><br />
                <span style="font-weight:bold;">ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS</span>
            </th>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/abet.png?raw=true" alt="ABET" style="width:50%; height:auto"/></td>
        </tr>
    </theader>
    <tbody>
        <tr><td colspan="3"><span style="font-weight:bold;">Formato</span>: Guía de Práctica de Laboratorio / Talleres / Centros de Simulación</td></tr>
        <tr><td><span style="font-weight:bold;">Aprobación</span>:  2022/03/01</td><td><span style="font-weight:bold;">Código</span>: GUIA-PRLD-001</td><td><span style="font-weight:bold;">Página</span>: 1</td></tr>
    </tbody>
</table>
</div>

<div align="center">
<span style="font-weight:bold;">INFORME DE LABORATORIO</span><br />
<span>(formato estudiante)</span>
</div>


<table>
<theader>
<tr><th colspan="6">INFORMACIÓN BÁSICA</th></tr>
</theader>
<tbody>
<tr><td>ASIGNATURA:</td><td colspan="5">Programación Web 2</td></tr>
<tr><td>TÍTULO DE LA PRÁCTICA:</td><td colspan="5">Ajax y NodeJS</td></tr>
<tr>
<td>NÚMERO DE PRÁCTICA:</td><td>03</td><td>AÑO LECTIVO:</td><td>2022 A</td><td>NRO. SEMESTRE:</td><td>III</td>
</tr>
<tr>
<td>FECHA DE PRESENTACION:</td><td>15-May-2022</td><td>HORA DE PRESENTACION:</td><td colspan="3">21:00</td>
</tr>
<tr><td colspan="3">Integrantes:
<ul>
<li>Kevin Pedro Yare Chulunquia</li>
<li>Joel Erick Gutierrez Puma</li>
<li>Joaquín Gonzalo Paredes Mescco</li>
</ul>
</td>
<td>NOTA:</td><td colspan="2"></td>
</tr>
<tr><td colspan="6">DOCENTES:
<ul>
<li>Richart Smith Escobedo Quispe (rescobedoq@unsa.edu.pe)</li>
</ul>
</td>
</<tr>
</tdbody>
</table>


# Solución y resultados

## I.		SOLUCIÓN DE EJERCICIOS/PROBLEMAS

-  En grupos de 3 a 5 personas implemente una aplicación web que navegue sobre archivos Markdown y permita:
    1. Listas los archivos Markdown disponibles
      * Resolución
   
    3. Ver el contenido de un archivo Markdown traducido a HTML
      * Resolución
   
    5. Crear nuevos archivos MarkDown y almacenarlos en el servidor
      * Resolución

-   La comunicación entre el cliente y el servidor tiene que ser usando JSON sólamente.
El cliente debe usar AJAX para sus peticiones
El servidor debe usar NodeJS
Su aplicación debe ser de página única, es decir que sólo habrá un archivo index.html y nada más.

-   Si los enlaces proporcionado en esta guía no le son suficientes, puede revisar códigos en Internet que le ayuden con cosas como ejemplos: listar un directorio en NodeJS; pero deberá incluir los enlaces correspondientes en sus archivos como comentarios y sólo podrá usar código de stackoverflow, incluir código de cualquier otra fuente está prohibido y se considerará actitud deshonesta.

## II.	SOLUCIÓN DE CUESTIONARIO

- En el Ejemplo "Hola Mundo" con NodeJS. ¿Qué pasó con la línea: "Content type ….."?
    * En ese ejemplo no se le agregó por que no se espicifico que se muestre en HTML, en todo caso debiera introducir un encabezado HTTP con el tipo de contenido correcto. Como por ejemplo: 
    ```
    res.writeHead(200, {'Content-Type': 'text/html'}); ´´´

- En los ejercicios. ¿En qué lugar debería estar el archivo poema.txt?
    * Debiera estar en una carpeta llamada priv.
    ```
    fs.readFile(path.resolve(__dirname, 'priv/poema.txt'), 'utf8', ´´´

-  ¿Entiende la expresión regular en el código y se da cuenta de para qué es útil?
    *

- Note que la respuesta del servidor está en formato JSON, ¿Habrá alguna forma de verla directamente?
    * 
## III.	CONCLUSIONES

- 

## REFERENCIAS Y BIBLIOGRÁFIA RECOMENDADAS
-   https://www.w3schools.com/nodejs/nodejs_intro.asp
-   https://nodejs.org/en/docs/guides/getting-started-guide/
-   https://nodejs.dev/learn
-   https://www.w3schools.com/js/js_api_fetch.asp
