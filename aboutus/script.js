const route = (event)=>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "",event.target.href);
};

window.route = route;
// const routes ={
//     "/":"/pages/index.html",
//     "/service":"/pages/index.html",
//     "/doctor":"/pages/index.html",
//     "/department":"/pages/index.html",
//     "/aboutus":"/pages/index.html",
//     "/gallery":"/pages/index.html",
//     "/contact":"/pages/index.html",
//     "/faq":"/pages/index.html",
// }

// const handleLocation = async () =>{
//     const path = window.location.pathname;
//     const route =routes[path] || routes[];
//     const html = await fetch(route).then((data) => data.text());
//     document.getElementById("main-page").innerHTML = html;
// }

// window.onpopstate = handleLocation;
// window.route = route;

// handleLocation();