<template>
    <div>
 
        <router-link :to="{ name: 'remove_ads' }"  style="text-decoration: none; color: inherit;" class="setting" >
             <font-awesome-icon class="setting-img" :icon="['fa', 'pencil']" size="lg" />
            <p class="setting-text">Remove ads forever</p>
        </router-link>

        <div class="setting" @click="$store.commit('soundmutation')" >
            <font-awesome-icon class="setting-img" :icon="['fa', 'cart-shopping']" size="lg" />
            <p class="setting-text" >Sounds during game</p>
            <div class="form-check form-switch">
                <input v-if="$store.getters.isSoundMuted" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" >
                <input v-if="!$store.getters.isSoundMuted" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked >
            </div>
        </div>
        <router-link :to="{ name: 'edit_profile' }"  style="text-decoration: none; color: inherit;" class="setting" >
            <font-awesome-icon class="setting-img" :icon="['fa', 'volume-high']" size="lg" />
            <p class="setting-text">Edit profile</p>
        </router-link>
        <router-link :to="{ name: 'edit_notifications' }"  style="text-decoration: none; color: inherit;" class="setting" >
            <font-awesome-icon class="setting-img" :icon="['fa', 'bell']" size="lg" />
            <p class="setting-text">Notifications</p>
        </router-link>
        <router-link :to="{ name: 'regulations' }"  style="text-decoration: none; color: inherit;" class="setting" >
            <font-awesome-icon class="setting-img" :icon="['fa', 'scroll']" size="lg" />
            <p class="setting-text">Regulations and privacy policy</p>
        </router-link>
        <router-link :to="{ name: 'edit_privacy' }"  style="text-decoration: none; color: inherit;" class="setting" >
            <font-awesome-icon class="setting-img" :icon="['fa', 'lock']" size="lg" />
            <p class="setting-text">Privacy</p>
        </router-link>
       
    </div>
</template>

<script>
export default {
    name: "Settings",
    data() {
        return {

        }
    },
}
</script>

<style lang="scss">
    .setting {
        text-align: left;
        font-size: 1.4em;
        width: 100%;
        display: flex;
        height: 4rem;
        
    }

    .setting:hover {
        background-color: rgb(46, 134, 228);
        cursor: pointer
    }

    .setting-text {
        left: 30px;
        margin-left: 1.5em;
        margin-top: auto;
        margin-bottom: auto;
    }

    .setting-img {
        width: 40px;   
        margin-left: 2rem;
        margin-top: auto;
        margin-bottom: auto;
    }

    .setting-checkbox {
        height:100%;
        margin-top: auto;
        margin-bottom: auto;
        
        
        
    }

    
</style>