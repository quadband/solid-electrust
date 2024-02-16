#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn hello_from_rust(){

  let cwd = if let Ok(pbuf) = std::env::current_dir(){
    String::from(pbuf.to_str().unwrap())
  } else {
    String::from("none")
  };

  println!("Hello. I'm from Rust! CWD: {}", cwd);
}
