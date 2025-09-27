#include <iostream>

int main (){

    const int SIZE =99;
    std::string foods[SIZE];

    fill(foods, foods+(SIZE/3) , "Pizza");
    fill(foods + (SIZE/3), foods+(SIZE/3)*2, "Burger");
    fill(foods + (SIZE/3)*2, foods + SIZE, "SandWich");
 

    for (std::string food : foods){

        std::cout << food << std:: endl;
    }
    

    return 0;
}