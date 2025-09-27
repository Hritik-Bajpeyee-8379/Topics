#include<iostream>

int serachArray(int arr[],int size,int element);

int main(){

    int num[]={1,2,3,4,5,6,7,8,9,10};
    int size = sizeof(num)/sizeof(num[0]);
    int index;
    int myNum;

    std::cout<<"Enter ";
    std::cin>> myNum;

    index =serachArray(num,size,myNum);

    if(index != -1){
        std::cout << myNum << " Is at Index " << index;
    
    }
    else{
        std::cout << myNum << " Is Not in Array ";

    }

    return 0;
}

int serachArray(int arr[],int size,int element){

    for (int i = 0; i < size; i++)
    {
        if (arr[i] == element)
        {
            return i;
        }
    }
    return -1;
    


}