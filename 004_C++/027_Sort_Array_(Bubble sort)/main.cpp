#include <iostream>
using namespace std;

void BubbleSort(int arr[], int length);

int main(){

    int arr[]={10,3,1,2,5,8,9,7,4,11,54,32,66,44,300};
    int size = sizeof(arr)/sizeof(arr[0]);
    BubbleSort(arr,size);

    for(int i :arr){
        cout<< i << " ";
    }
    

    return 0;
}

void BubbleSort(int arr[], int length){

    int temp;
    for (int i = 0; i < length -1; i++)
    {
        for (int j = 0; j < length-i-1; j++)
        {
            if (arr[j] > arr[j+1])
            {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] =temp;
            }
            
        }
        
    }
    
}