<template>
 <nav>
   <v-toolbar flat app>
       <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
           <span class = "font-weight-light">Pine Creek</span>
             <span> Estates</span>
       </v-toolbar-title>
      
      
   </v-toolbar>

    <v-navigation-drawer app v-model="drawer"  class="success">
       <v-list>
           <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
               <v-list-tile-action>
                   <v-icon class="white--text">{{link.icon}}</v-icon>
               </v-list-tile-action>
             <v-list-tile-content>
                 <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
             </v-list-tile-content>  
           </v-list-tile>
       </v-list>
     </v-navigation-drawer>   




 </nav>
</template>



<script>
export default {
    data() {
        return {
            drawer:false,
            links :[
                { icon: 'apps', text: 'Welcome', route: '/' },
                { icon: 'home', text: 'Homes', route: '/homes' },
                { icon: 'assignment', text: 'Features', route: '/features' },
                { icon: 'group', text: 'Team', route: '/team' },
                { icon: 'fingerprint', text: 'Register', route: '/register' }
            ]
        }
    }
}
</script>

