"use client"
export const isMobile=()=>{
    if (window.innerWidth < 768) {
        // Rediriger vers la version mobile
        window.location.href = "/chemin-vers-version-mobile";
      }
}