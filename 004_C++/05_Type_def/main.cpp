#include <iostream>
#include<vector>

// typedef std::vector<std::pair<std::string, int>> pairlist_t;

// typedef std::string text_t;
// typedef int number_t;


using text_t = std::string;
using number_t =int;

int main (){

    // pairlist_t pairlist;

    text_t firstname = "Hritik";
    number_t age = 19;

    std::cout << firstname << '\n';
    std::cout << age << '\n';

    return 0;
}