var location = new Splide( '.splide', {
focus  : 0,
omitEnd: true,
autoWidth: true,
autoHeight: true,
gap: '50px',
padding: '70px',
breakpoints: {
    768: {
        padding: '40px',
        arrows: false,
        gap: '30px',
    },
},
} );

location.mount();
  