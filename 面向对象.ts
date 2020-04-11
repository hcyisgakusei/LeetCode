// 封装
class A {

}

// 继承
interface B extends A{
    overFn: OverFn
}


// 多态
interface OverFn {
    (name: string) : string
    (age: number): number
}

