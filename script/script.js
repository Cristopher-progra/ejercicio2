
document.querySelector('form').addEventListener('submit', function(e) {
e.preventDefault();
                
var nombre = document.getElementById('nombre').value;
var apellido = document.getElementById('apellido').value;
var producto = document.getElementById('producto').value;
var cantidad = document.getElementById('cantidad').value;
var precio = document.getElementById('precio').value;
                    
var total = cantidad * precio;
                    
alert('Factura de ' + nombre + ' ' + apellido + '\nProducto: ' + producto + '\nCantidad: ' + cantidad + '\nPrecio: $' + precio + '\nTotal: $' + total);
});
                   