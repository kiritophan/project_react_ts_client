/* Higher order components */

/* Memo là 1 HOC bảo về components tránh load lại trang không cần thiết */
import { memo } from 'react'
import { Prop } from '@/pages/products/Product'


const Test = (data: Prop) => {
    const { count, handlePrintCount } = data;

    console.log("Rerender test components")
    return (
        <div>
            hello test {count}
            <div>
                <button onClick={() => {
                    handlePrintCount(count)
                }}>Thu</button>
            </div>
        </div>
    )
}

export default memo(Test)