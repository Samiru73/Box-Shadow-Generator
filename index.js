// Obtiene el elemento de vista previa
const preview = document.getElementById("preview");
// Obtiene el elemento de estilos
const styles = document.getElementById("styles");
// Obtiene los elementos de entrada (sliders) dentro del contenedor con clase "settings"
const ranges = document.querySelectorAll(".settings input");
// Obtiene el botón de copiar estilos
const copyButton = document.getElementById("copy-styles");

// Agrega un evento de escucha a cada slider para detectar cambios de entrada
ranges.forEach((slider) => {
    slider.addEventListener("input", generateStyles);
});

// Función para generar los estilos basados en las entradas de los sliders
function generateStyles() {
    // Obtiene los valores de las entradas de los sliders
    const xShadow = document.getElementById("x-shadow").value;
    const yShadow = document.getElementById("y-shadow").value;
    const blurRadius = document.getElementById("blur-r").value;
    const spreadRadius = document.getElementById("spread-r").value;
    const shadowColor = document.getElementById("shadow-color").value;
    const shadowOpacity = document.getElementById("shadow-opacity").value;
    const shadowInset = document.getElementById("inset-shadow").checked;
    const borderRadius = document.getElementById("border-r").value;
    
    // Crea la cadena de estilos de sombra de caja
    const boxShadow = `${shadowInset ? "inset " : ""} ${xShadow}px ${yShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowOpacity)}`;

    // Actualiza los estilos de la vista previa
    preview.style.boxShadow = boxShadow;
    preview.style.borderRadius = `${borderRadius}px`;

    // Actualiza el contenido del elemento "styles" con los estilos generados
    styles.textContent = `box-shadow: ${boxShadow};\nborder-radius: ${borderRadius}px`;
}

// Función para convertir un color hexadecimal a RGBA
function hexToRgba(shadowColor, shadowOpacity){
    const r = parseInt(shadowColor.substr(1, 2), 16);
    const g = parseInt(shadowColor.substr(3, 2), 16);
    const b = parseInt(shadowColor.substr(5, 2), 16);

    return `rgba(${r}, ${g}, ${b}, ${shadowOpacity})`;
}

// Función para copiar los estilos al portapapeles
function copyStyles(){
    styles.select();
    document.execCommand("copy");
    copyButton.innerText = "¡Copiado!";
    setTimeout(() =>{
        copyButton.innerText = "Copiar Estilos";
    }, 500);
}

// Genera los estilos iniciales al cargar la página
generateStyles();
