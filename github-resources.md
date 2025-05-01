https://github.com/Apollo-Level2-Web-Dev/Apollo-Level2-Web-Dev-batch-5-be-a-typescript-technocrat/tree/main/module1


🧱 Step-by-Step Guide:
🔹 1. fnm ইনস্টল করো (যদি না করে থাকো):
powershell
Copy
Edit
winget install Schniz.fnm
🔹 2. Node.js ভার্সন ইনস্টল করো:
powershell
Copy
Edit
fnm install 20.19.1
fnm install 22.15.0
🔹 3. স্ক্রিপ্ট চালানোর অনুমতি দাও (একবারই করতে হয়)
👉 PowerShell চালাও as Administrator, তারপর:

powershell
Copy
Edit
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
➡️ যখন প্রশ্ন করবে, টাইপ করো: Y

🔹 4. PowerShell Profile ফাইল তৈরি করো (যদি না থাকে):
powershell
Copy
Edit
New-Item -Path $PROFILE -ItemType File -Force
🔹 5. Profile ফাইল খুলো:
powershell
Copy
Edit
notepad $PROFILE
🔹 6. নিচের লাইনটি পেস্ট করো ফাইলে:
powershell
Copy
Edit
& fnm env --use-on-cd | Out-String | Invoke-Expression
💾 Save করে ফাইল বন্ধ করো।

🔹 7. নতুন PowerShell Session চালাও এবং টেস্ট করো:
powershell
Copy
Edit
fnm use 20.19.1
node -v
🟢 আউটপুট হবে: v20.19.1 — কাজ করছে!

✅ অতিরিক্ত কমান্ডসমূহ:

কাজ	কমান্ড
ইনস্টল করা ভার্সন লিস্ট	fnm list
নতুন ভার্সন ইনস্টল	fnm install <version>
ভার্সন switch	fnm use <version>
ডিফল্ট ভার্সন সেট	fnm default <version>
system Node ব্যবহার	fnm use system
📌 টিপস:
fnm প্রতি PowerShell ওপেন করার সাথে সাথেই কাজ করার জন্য profile ফাইলে লাইনটি থাকা জরুরি।

VS Code-র integrated terminal এও কাজ করবে যদি PowerShell ডিফল্ট শেল হয়।

