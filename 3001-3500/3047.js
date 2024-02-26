/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 */
var largestSquareArea = function(bottomLeft, topRight) {
    let area=0;
    for(let i=0;i<bottomLeft.length;i++){
        for(let j=i+1;j<bottomLeft.length;j++){
            // finding the intersection points 
            let x1=Math.max(bottomLeft[i][0],bottomLeft[j][0]);
            let y1=Math.max(bottomLeft[i][1],bottomLeft[j][1]);
            let x2=Math.min(topRight[i][0],topRight[j][0]);
            let y2=Math.min(topRight[i][1],topRight[j][1]);
            
            if(x1<x2 && y1<y2){
                let side=Math.min(x2-x1,y2-y1);
                 area=Math.max(area,side*side);
            }
        }
    }
    return area;
};
