#include<stdio.h>
#include<math.h>
int arms(int n, int count)
void main()
{
int a,b,z,y;
int len =0;
printf("enter a number");
scanf("%d",&a);
z=a;
if(z>0){
    z%10;
count++;
}
b=arms(a,count);
if(a==y){
    printf("armstrong");
}
else{
    printf("not armsdtromg");
}
}
int arms(int n, int c)
{
int x;
x=n;
if(x==0)
{
    return(0);

}
else{
    x=x%10;
y= pow(x, c);
return(y +arms(x/10,c));
}
}