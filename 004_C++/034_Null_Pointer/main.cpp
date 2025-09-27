#include <iostream>

int main(){

    int *pointer = nullptr;
    int x =123;

    pointer = &x;

    if(pointer == nullptr){
        std::cout << "Failed";
    }
    else{
        std::cout << "Assigned";
    }

    return 0;
}