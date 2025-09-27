#include <iostream>

double square(double l);




int main (){
    
    double length = 5.0;
    double area = square(length);
    std::cout<<area;

    

    return 0;
}
double square(double l){
    double result = l*l;
    return result;
}