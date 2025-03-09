class ListNode {
    private value: number;
    private next: ListNode | null;
    
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }

    getValue(): number {
        return this.value;
    }

    setValue(value: number): void {
        this.value = value;
    }

    getNext(): ListNode | null {
        return this.next
    }

    setNext(node: ListNode): void {
        this.next = node;
    }
}
