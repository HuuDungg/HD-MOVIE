import { useState } from "react";
import { Button, Input, XStack } from "tamagui";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { SizeTokens } from 'tamagui';

const InputComment = (props: { size: SizeTokens }) => {
    const [comment, setComment] = useState(''); // Khai báo state để lưu giá trị của ô nhập

    const handlePress = () => {
        alert(comment); // Hiển thị giá trị của ô nhập trong alert
        setComment(''); // Xóa nội dung của ô nhập
    };

    return (
        <XStack
            style={{
                alignItems: "center",
                marginRight: 20,
                gap: 10
            }}
        >
            <Input
                flex={1}
                size={props.size}
                placeholder={`Enter your comment...`}
                value={comment} // Gán giá trị từ state vào ô nhập
                onChangeText={setComment} // Cập nhật state khi người dùng nhập
            />
            <Button
                size={props.size}
                icon={() => <MaterialCommunityIcons name="send" size={24} color="black" />}
                onPress={handlePress} // Gọi hàm xử lý khi nhấn nút
                disabled={!comment.trim()} // Vô hiệu hóa nút nếu ô nhập rỗng
                style={{
                    opacity: comment.trim() ? 1 : 0.5 // Thay đổi độ mờ của nút
                }}
            />
        </XStack>
    )
}

export default InputComment;
