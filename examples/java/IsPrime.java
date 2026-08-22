public class IsPrime {
    static boolean isPrime(int number) {
        if (number < 2) {
            return false;
        }

        for (int divisor = 2; divisor <= number / divisor; divisor++) {
            if (number % divisor == 0) {
                return false;
            }
        }

        return true;
    }

    static void check(boolean condition, String message) {
        if (!condition) {
            throw new AssertionError(message);
        }
    }

    public static void main(String[] args) {
        check(!isPrime(1), "1 should not be prime");
        check(isPrime(2), "2 should be prime");
        check(isPrime(17), "17 should be prime");
        check(!isPrime(21), "21 should not be prime");
        System.out.println("isPrime: ok");
    }
}
