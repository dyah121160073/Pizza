function setup() {
    createCanvas(800,400)
    background(255,178,102)

// gambar bergerak
    x1 = 399,5;
    y1 = 0;

    x2 = 399;
    y2 = 399,5;

    a = 90;
    b = 150;
    lebar = 400;
    tinggi = 300;

    p = 150;
    q = 175;
    y8 = 20;
    x = 20;

    w = 200;
    z = 170;
    y3 = 20;
    x3 = 20;

    t = 180;
    r = 209;
    y4 = 20;
    x4 = 20;

    u = 250;
    v = 170;
    y5 = 20;
    x5 = 20;

    k = 230;
    l = 205;
    y6 = 20;
    x6 = 20;

    h = 205;
    e = 240;
    y7 = 20;
    x7 = 20;

    y = 200;
    j = 0;

    //gambar diam
    a1 = 500;
    b1 = 150;
    lebar1 = 400;
    tinggi1 = 300;
}

function draw() {
    //line(x1,y1,x2,y2)
    
    strokeWeight(5);
    fill(0);
    stroke("BLACK")
    line(399,0,399,399);

    strokeWeight(20);
    fill(206,156,105);
    stroke("BROWN");
    arc(a,b,lebar,tinggi,0,0.25*PI);
    strokeWeight(2)
    fill('RED');
    ellipse(p,q,y8,x);
    ellipse(w,z,y3,x3);
    ellipse(t,r,y4,x4);
    ellipse(u,v,y5,x5);
    ellipse(k,l,y6,x6);
    ellipse(h,e,y7,x7);
   

    // gambar diam
    strokeWeight(20);
    fill(206,156,105);
    stroke("BROWN");
    arc(a1,b1,lebar1,tinggi1,0,0.25*PI);
    strokeWeight(2)
    var y = 100 + 30 * Math.sin(PI/10*j)
    j+=1
    fill(y,0,0);
    c=410
    ellipse(p+c,q,y8,x);
    ellipse(w+c,z,y3,x3);
    ellipse(t+c,r,y4,x4);
    ellipse(u+c,v,y5,x5);
    ellipse(k+c,l,y6,x6);
    ellipse(h+c,e,y7,x7);
    
}