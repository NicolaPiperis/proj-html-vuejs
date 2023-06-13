<script>
    export default {
        name : "PageFooter"
    }
</script>

<template>

    <footer>

        <div class="container">

            <div class="row">

                <!-- ADDRESS -->
                <div class="address">

                    <h3>Address</h3>

                    <ul>

                        <li>382 NE 191st St # 87934 Miami, FL 33179-3899</li>

                        <li>+1(305)547-9909 (9am - 5pm EST, Monday-Friday)</li>

                        <li>support@maxcoach.com</li>

                        <li>

                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-linkedin"></i>

                        </li>

                    </ul>

                </div>

                <!-- EXPLORE AND  INFORMATION-->
                <div class="row content-center w-100 gap-50">
                    
                    <!-- FIRST COL -->
                    <div class="explore">

                        <h3>Explore</h3>

                        <ul>

                            <li>Start here</li>

                            <li>Blog</li>

                            <li>About us</li>

                        </ul>

                    </div>

                    <!-- SECOND COL -->
                    <ul class="second-col">

                        <li>Success story</li>

                        <li>Courses</li>

                        <li>Contact us</li>

                    </ul>

                    <!-- THIRD COL -->
                    <div class="information">

                        <h3>Information</h3>

                        <ul>

                            <li>Membership</li>

                            <li>Purchase guide</li>

                            <li>Privicy policy</li>
                            
                            <li>Term of service</li>

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


    footer{
        background-color: #171621;
        height: 500px;
        position: relative;

        .address{
            color: white;
            padding-top: 100px;
            width: 60%;
        } 
        .explore{
            color: white;
            padding-top: 100px;
        }
        .information{
            padding-top: 100px;
            color: white;
        }
        .second-col{
            padding-top: 160px;
        }
            
            h3{
                margin-bottom: 30px;
            }
            
            ul{
                color: rgba(255, 255, 255, 0.733);
                list-style: none;
                line-height: 250%;
                font-size: 14px;

                i{
                    font-size: 22px;
                    padding-right: 20px;
                    padding-top: 20px;
                }
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