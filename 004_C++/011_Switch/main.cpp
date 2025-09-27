#include<iostream>

int main(){

int day;
std::cout << "Enter Day: ";
std :: cin>>day;
switch (day) {
  case 1:
    std ::cout << "Monday";
    break;
  case 2:
    std :: cout << "Tuesday";
    break;
  case 3:
    std :: cout << "WednesdaY";
    break;
  case 4:
    std :: cout << "Thrusday";
    break;
  case 5:
    std :: cout << "Friaday";
    break;
  case 6:
    std :: cout << "Saturday";
    break;
  default:
    std :: cout << "Sunday";
}


    return 0;
}