#include <assert.h>
#include <stdio.h>

static int sum_of_digits(unsigned int number) {
    int sum = 0;

    do {
        sum += (int)(number % 10U);
        number /= 10U;
    } while (number > 0U);

    return sum;
}

int main(void) {
    assert(sum_of_digits(507U) == 12);
    assert(sum_of_digits(0U) == 0);
    printf("sum_of_digits: ok\n");
    return 0;
}
