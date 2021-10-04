function meal (day,time){
    switch (day){
        case "sunday":
            switch(time){
                case ("berakfast"):
                    output="dosa"
                    break
                case("lunch"):
                    output="dal-rice"
                    break
                case ("dinner"):
                    output="piner and  chapti"
                    break
                default:
                    output="food not found"
                    break

                }
                break
        case "monday":
            switch (time){
                case ("breakfast"):
                    output="fried rice"
                    break
                case ("lunch"):
                    output="aloo rice"
                    break
                case ("dinner"):
                    output="chhole bhature"
                    break
                default:
                    output="time not found"
                    break
            }
            break
        case "other" :
            switch ("time"){
                case ("breakfast"):
                    output="allo"
                    break
                case("lunch"):
                    output="rajma-rice"
                    break
                case("dinner"):
                   output="vag-chapati"
                   break

            };
            break  
    }
    return output

};
console.log(meal("sunday","lunch"));
console.log(meal("monday","dinner"))