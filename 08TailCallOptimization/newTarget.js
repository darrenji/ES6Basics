/*
/!**
 * Created by Darren on 2017/9/7.
 *!/
function MyConstructor(){
    console.log(new.target === MyConstructor, typeof  new.target);
    if(typeof new.target === 'function'){
        console.log(new.target.name);
    }
}

// ��ʹ��new�ؼ��ִ�������ʵ����ʱ��new.targetָ��MyConstructor
new MyConstructor();

// ��ʹ�ù��캯�����������ʱ��new.target��ֵΪundefined
MyConstructor();*/
