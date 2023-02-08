const route =(event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({},"",event.target.href);
    handleLocation();
};


const routes ={
    "/":"/pages/index.html",
    "/services/": "/pages/services.html",
    "/doctors/": "/pages/doctors.html",
    "/department/": "/pages/department.html",
    "/aboutus/": "/pages/aboutus.html",
    "/gallery/": "/pages/gallery.html",
    "/contact/": "/pages/contact.html",
    "/faq/": "/pages/faq.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    // const route = routes[path] ||routes[];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();