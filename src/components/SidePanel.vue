<template>
    <div id="menu">
        <el-button type="text" @click="toggle">&#9776; OPTIONS</el-button>

        <div v-click-outside="hide" v-show="opened" id="options-menu" class="options" v-bind:style="{ width: divWidth + 'px' }">
            <a href="javascript:void(0)" class="close" @click="hide">&times;</a>
            <a href="#">Lets figure out</a>
            <a href="#">how to make this</a>
            <a href="#">reusable</a> 
            <a href="#">everywhere</a>
        </div>

<!-- <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span> -->

        <!-- <el-dialog title="Form Options" :visible.sync="dialogVisible">Hey</el-dialog> -->
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
    name: 'menu',
    data() {
        return {
            opened: false,
            divWidth: 0
        }
    },
    methods: {
        toggle() {
            this.opened = true;
            this.divWidth = 350;
            //document.getElementById("options-menu").style.width = "350px";
        },
        hide() {
            this.opened = false
            //document.getElementById("options-menu").style.width = "0";
        }
    },
    mounted() {
        // prevents clicking outside event with open sidepanel
        this.popupItem = this.$el
    },
    directives: {
        ClickOutside
    }
}
</script>

<style>
    .options {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        right: 0;
        background-color: #EEF1F6;
        overflow-x: hidden;
        transition: 0.5s;
        /* padding-top: 60px; */
    }

    .options a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.2s;
    }

    .sidenav a:hover {
        color: #f1f1f1;
    }

    .sidenav .close {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }

/* Handle differently on smaller screen size */
    @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}
    }
</style>
