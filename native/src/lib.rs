#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn hello_from_rust(){
  println!("Hello. I'm from Rust!");
}
