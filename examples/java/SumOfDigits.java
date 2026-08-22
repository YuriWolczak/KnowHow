public class SumOfDigits {
    static int sumOfDigits(int number) {
        if (number < 0) {
            throw new IllegalArgumentException("number must be non-negative");
        }

        int sum = 0;
        do {
            sum += number % 10;
            number /= 10;
        } while (number > 0);

        return sum;
    }

    static void check(boolean condition, String message) {
        if (!condition) {
            throw new AssertionError(message);
        }
    }

    public static void main(String[] args) {
        check(sumOfDigits(507) == 12, "507 should produce 12");
        check(sumOfDigits(0) == 0, "0 should produce 0");
        System.out.println("sumOfDigits: ok");
    }
}
