export function expandSidebar() {
    if (window.innerWidth < 991.5) {
        const sidebar = document.querySelector(".sidebar");
        const main = document.querySelector(".main");
        const bottombar = document.querySelector(".bottombar");

        let timeout = null;
        
        if (sidebar.classList.contains("sidebar--animation")) sidebar.classList.remove("sidebar--animation"), sidebar.classList.add("sidebar-back-animation"), timeout = setTimeout(() => {sidebar.style.width = "0px";}, 550)
        else sidebar.classList.remove("sidebar-back-animation"), clearTimeout(timeout), sidebar.style.width = "16rem", sidebar.classList.add("sidebar--animation")
        
        main.style.filter === "grayscale(100%) opacity(0.7)" ? main.style.filter = "none" : main.style.filter = "grayscale(100%) opacity(0.7)"
        bottombar.style.filter === "grayscale(100%)" ? bottombar.style.filter = "none" : bottombar.style.filter = "grayscale(100%)"
    }

    
}