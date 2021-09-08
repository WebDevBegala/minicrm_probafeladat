export default {
    data() {
        return {
            isMobile: false,
        }
    },
    created() {
            window.addEventListener('resize', this.onResize);
    },

    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    },

    methods: {  
        onResize() {
            this.isMobile = window.innerWidth <= 1024 ? true : false;
        }
    }
}
