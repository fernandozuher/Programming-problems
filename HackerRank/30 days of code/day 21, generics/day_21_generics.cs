using System;

class Printer
{
    static void PrintArray<T>(T[] array) {
        foreach (var val in array)
            Console.WriteLine(val);
    }

    // Immutable HackerRank code below 
    static void Main(string[] args)
    {
        int n = Convert.ToInt32(Console.ReadLine());
        int[] intArray = new int[n];
        for (int i = 0; i < n; i++)
        {
            intArray[i] = Convert.ToInt32(Console.ReadLine());
        }
        
        n = Convert.ToInt32(Console.ReadLine());
        string[] stringArray = new string[n];
        for (int i = 0; i < n; i++)
        {
            stringArray[i] = Console.ReadLine();
        }
        
        PrintArray<Int32>(intArray);
        PrintArray<String>(stringArray);
    }
}