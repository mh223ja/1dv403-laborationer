function init ()
{
    var world = "Hello World!";
    return function() {
        alert(world)
    }
}
window.onload = init();