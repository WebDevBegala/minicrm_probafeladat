export default {
    data() {
        return {
           isOpen: false
        }
    },
    methods: {  
        toggleIsOpen(){
            this.isOpen = !this.isOpen
        },
        getAccordionClass(){
            if(this.isMobile){
              return this.isOpen ? 'open' : 'close'
            }
            else {
              return 'open'
            }
          }
    },
    watch:{
        isOpen: function(){
          this.getAccordionClass()
        }
      }
}
