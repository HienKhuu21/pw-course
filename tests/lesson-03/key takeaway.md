# Git

## Undo actions
    - Xem lịch sử commit: git log
    - Thay đổi commit message: 
        1. git commit --amend
            - Gõ i -> vào chế độ insert
            - Gõ esc để thoát insert
            - Gõ “:wq” -> write and quit
        2. git commit --amend -m"message"
    - Đưa từ vùng staging về working directory: git restore --staged <file>
        - EX: [git restore --stage <tests\lesson-03\Uncommit\file4.txt>](https://drive.google.com/file/d/1n_Jpp1NxyEiAR1I94V957eKHY1C0fyGT/view?usp=drive_link)
    - Đưa từ vùng repository về working directory (uncommit): git reset HEAD~n (n = số commit gần nhất muốn uncommit) 
        - EX: [git reset HEAD~2](https://drive.google.com/file/d/1HKgfwDJAr0xYNHx4bQ3yIffAuE7DREkk/view?usp=drive_link)

## Branching model
    - git branch : xem các nhánh đang có trong proj, nhánh nào có * ở trước là đang ở nhánh đó
    - git branch <ten_branch> : tạo 1 nhánh mới từ nhánh hiện tại
    - git checkout <ten_branch> : đỗi wa nhánh mới
    - git checkout -b <ten_branch> : tạo 1 nhánh mới từ nhánh hiện tại + đỗi wa nhánh mới
    - .gitignore file: Dùng để bỏ qua các file không cần git theo dõi.
        1. Ignore file: file_name
        2. Ignore folder: folder-name/

# Javascript basic

## Conventions
    - snake_case_now_now -> không xài
    - kebab-case-now-now -> tên file
    - camelCaseNowNow -> tên biến
    - PascalCaseNowNow -> tên class

## console.log
    - console.log(‘Toi la Nga’);
    - console.log(“Toi la Phong”);

    - let name = “Nga”;
        console.log(`Toi la ${name}`); ${variableName} chỉ xài cho ` `
        console.log(“Toi ten la ” + name)

## Object 
    - Object = đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số
    - Khai báo: 
        let/const <ten_object> = {
        <thuoc_tinh>: <gia_tri>,
        …
        }

        let user = {
            name:"Tien",
            age:"39",
            lacation:"HCM"              // thuoc tính cuối ko có ,
        }

        const class= {
            name:"Playwright VN",
            code:"K11",
            training:{
                versionControl:"git",
                coding:"javascript"     // thuoc tính cuối ko có ,
            }                           // thuoc tính cuối ko có ,
        }

    - Sử dụng: object.thuộc tính
        EX: console.log("name = " + user.name); -> name = Tien
            console.log("class training code = " + class.training.coding); -> class training code = javascript
            console.log("Class code = " + class["price"]); -> Class code = K11

    - Gán lại
        EX: user.age = 28
            proclassduct["training"]["coding"] = "Typescript"

## Logical operator
    - && : cả 2 vế của mệnh đề đều đúng
    - || : một trong 2 vế đúng
    - ! : đảo ngược lại giá trị của mệnh đề

## array
    - Khai báo: let/const array_name = [item1, item2, ...]; 
                let k11Student = ["Tien", "Duc", "Duong", "My"];
    - Truy xuất:
        1. Độ dài mảng: array.length
        2. Lấy phần tử theo index: array[0], array[2]

        EX: console.log(k11Student.length) -> 4
            console.log(k11Student[1]) -> Duc

## Function
## Phạm vi của biến
## Advance condition: if…else, if…else if, switch…case