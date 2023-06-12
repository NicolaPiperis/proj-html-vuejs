<script>
    export default {
        name : "PageMain"
    }
</script>

<template>

    <!-- MAIN PART -->
    <main>

        <!-- WORK CULTURE -->
        <section class="white-sections">

            <div class="container">

                <div class="between-row">

                    <!-- TITLE AND PARAGRAPH -->
                    <div class="text">

                        <div class="pre-title">
                            EVERYTHING IN 
                            <strong>MAXCOACH</strong>
                        </div>

                        <h2>
                            Learn about our
                            <span>Work Culture</span>
                            at Maxcoach
                        </h2>

                        <p>
                            Spend some time to visit our website or head office and discover our current courses, enrollment procedure, and registration deadline.
                            We are opening new classes every beginning of each month.
                        </p>

                        <div class="connected-link">
                            Have questions?
                            <a href="#">
                                Get a free guide 
                                <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>

                        <div class="decoration"></div>

                    </div>

                    <!-- IMG CONNECTED WITH THE TEXT -->
                    <div class="image">

                        <img src="images/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg" alt="work culture info image" class="main-img">

                        <!-- DECORATIOn -->

                        <!-- <img src="images/about-us-01-ohkia3qg98rq9vg3s0mn2hkflr1migdqdw370qnegc.jpg" alt="info decoration" class="decoration-img">

                        <img src="images/maxcoach-shape-07.png" alt="info" class="background-decoration-img">

                        <img src="images/maxcoach-shape-02.png" alt="info" class="background-decoration-img2"> -->
                        

                    </div>

                </div>

                <div class="stats">

                    <div>
                        <strong>129 +</strong>
                        <p>ENROLLED</p>
                    </div>

                    <div>
                        <strong>80</strong>
                        <p>FINISHED SESSIONS</p>
                    </div>

                    <div>
                        <strong>4%</strong>
                        <p>SATISFATCION RATE</p>
                    </div>

                </div>

            </div>

        </section>

        <section class="white-sections">

            <div class="container">

                <div class="between-row">
                    
                    <!-- IMG CONNECTED WITH THE TEXT -->
                    <div class="image">
    
                        <div class="main-img">

                            <img src="./../../public/images/stock-full-hd-11-670x450.jpg" alt="skills upgrade info image">

                            <!-- DECORATION --> 
                            <img src="./../../public/images/icon-youtube-play.png" alt="youtube icon" class="youtube-decoration">

                        </div>
                        
                    </div>

                    <!-- TITLE AND PARAGRAPH -->
                    <div class="text self-center">

                        <div class="pre-title">
                            HOW WE WORK
                        </div>

                        <h2>
                            Upgrade your skilss
                            <span>Upgrade your life</span>
                        </h2>

                        <p>
                            Opening up more opportunities in front of you to get the ticket to more ejoyable door in life.
                            Getting equipped with new skills for new sets of insights into your career.
                            MaxCoach accompany learners in every stage of learning.
                        </p>

                        <div class="connected-link-skillsupgrade" id="black">
                
                            Download free guidebook
                            <i class="fa-solid fa-arrow-right"></i>

                        </div>

                    </div>    

                </div>

                
            </div>
            
        </section>

        
        
    </main>
    
</template>

<style scoped lang="scss">
    @use './../styles/partials/variables.scss' as *;
    .white-sections{
        background-color: #F8F8F8;
        padding-top: 200px;
    }
    
    .between-row{
        display: flex;
        justify-content: space-between;
        
        .text{
            width: 35%;
            position: relative;

            .pre-title{
            color: $grigio ;
            }

            h2{
                font-size: 32px;
                font-weight: 800;
                line-height: 180%;

                span{
                    color: $verde-acqua;
                    font-weight: 500;
                }
            }

            p{
                color: $grigio;
                margin: 30px 0;
                line-height: 180%;
            }

            .connected-link{
                color: $grigio;

                a{
                    color: $verde-acqua;
                    border-bottom: 1px solid $grigio;
                }
            }

            .decoration{
                width: 70px;
                height: 70px;
                border-radius: 50%;
                border: 10px solid #ecc5ab;
                position: absolute;
                top: -30px;
                right: -50px;
            }
        }
        .image{
            width: 50%;
            
            .main-img{
                position: relative;
                
            }

            .youtube-decoration{
                position: absolute;
                top: 50%;
                right: 50%;
                transform: translate(50%, -50%);
                width: 65px;
            }
            
        }

    }
    .stats{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: 150px ;
        text-align: center;
        
        strong{
            color: $verde-acqua;
            font-size: 35px;
        }
        p{
            color: $grigio;
            font-weight: 600;
        }
    }

    .connected-link-skillsupgrade{
        border-bottom: 1px solid $grigio;
        width: 250px;
    }

    
    

</style>        