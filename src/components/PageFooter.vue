<script>
    export default {
        name : "PageFooter",
        props: {
        detailsFooter: Object 
        }
    }
</script>

<template>

    <footer>

        <div class="container">

            <div class="row">

                <!-- ADDRESS -->
                <div class="address">

                    <h3>{{ detailsFooter.title }}</h3>

                    <ul>

                        <li>{{ detailsFooter.street }}</li>

                        <li>{{ detailsFooter.number }}</li>

                        <li>{{ detailsFooter.email }}</li>

                    </ul>

                    <div class="social-icon">

                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>

                    </div>


                </div>

                <!-- EXPLORE AND  INFORMATION-->
                <div class="row content-center w-100 gap-50">
                    
                    <!-- FIRST COL -->
                    <div class="explore">

                        <h3>{{ detailsFooter.exploreTitle }}</h3>

                        <ul>

                            <li v-for="(infoExplore, idxExploreFooter) in detailsFooter.explore" :key="idxExploreFooter" >{{ infoExplore }}</li>

                        </ul>
                        
                    </div>
                    <!-- THIRD COL -->
                    <div class="information">

                        <h3>{{ detailsFooter.informationTitle }}</h3>

                        <ul>

                            <li v-for="(infoInformation, idxInformationFooter) in detailsFooter.information" :key="idxInformationFooter" >
                            {{ infoInformation }}
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

            <!-- RIGHTS -->
            <div class="row content-center">
                <p>@2020 MaxMoach. All rights reserved</p>
            </div>

            <!-- GO UP -->
            <div class="go-up">
                <a href="#"><i class="fa-solid fa-arrow-right fa-rotate-270"></i></a>
            </div>

        </div>

    </footer>

</template>

<style scoped lang="scss">
@use './../styles/partials/variables.scss' as *;

// FOOTER STYLE
    footer{
        background-color: #171621;
        height: 500px;
        position: relative;

        li:hover {
            color: $verde-acqua;
            cursor: pointer;
        }

        .address{
            color: white;
            padding-top: 100px;
            width: 60%;
        } 

        .social-icon{
            font-size: 22px;
           i{
            padding-right: 20px;
            padding-top: 20px;
            color: $grigio;
           }
           
           i:hover{
            color: $verde-acqua;
           }
        }


        .explore{
            color: white;
            padding-top: 100px;
            columns: 2;
            
            li:nth-child(4){
                padding-top: 53px;
            }
        }
        .information{
            padding-top: 100px;
            color: white;
        }
            
        h3{
            margin-bottom: 30px;
        }
        
        ul{
            color: rgba(255, 255, 255, 0.733);
            list-style: none;
            line-height: 250%;
            font-size: 14px;

        }

        p{
            color: $grigio;
            margin: 100px 0 50px 0;
        }    

        .go-up{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: $verde-acqua;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            bottom: 20px;
            right: 20px;
            
            i{
                color: white;
                font-size: 22px;
            }
        }
        
    }

</style>